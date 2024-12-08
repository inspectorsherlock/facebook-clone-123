import { NextRequest, NextResponse } from "next/server";
import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
  DeleteItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

function generateNumericId() {
  return Math.floor(Math.random() * 1_000_000_000);
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, content } = body;

    if (!id || !content) {
      return NextResponse.json(
        { message: "Missing 'id' or 'content'" },
        { status: 400 }
      );
    }

    const params = {
      TableName: "blah", // Replace with your table name
      Key: {
        id: { N: id.toString() },
      },
      UpdateExpression: "SET content = :content",
      ExpressionAttributeValues: {
        ":content": { S: content },
      },
    };

    const command = new UpdateItemCommand(params);
    await client.send(command);

    return NextResponse.json({ message: "Status updated successfully!" });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json(
      { message: "Failed to update status", error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json(
        { message: "Missing 'content'" },
        { status: 400 }
      );
    }

    const id = generateNumericId();

    const params = {
      TableName: "blah", // Replace with your table name
      Item: {
        id: { N: id.toString() },
        content: { S: content },
        timestamp: { S: new Date().toISOString() },
      },
    };

    const command = new PutItemCommand(params);
    await client.send(command);

    return NextResponse.json({ message: "Status posted successfully!", id });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to post status", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const params = {
      TableName: "blah", // Replace with your table name
    };

    const command = new ScanCommand(params);
    const result = await client.send(command);

    const items = result.Items?.map((item) => ({
      id: item.id.N,
      content: item.content.S,
      timestamp: item.timestamp.S,
    }));

    return NextResponse.json(items || []);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch statuses", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Missing 'id' parameter" },
        { status: 400 }
      );
    }

    const params = {
      TableName: "blah", // Replace with your table name
      Key: {
        id: { N: id.toString() }, // Ensure the id is a number (N)
      },
    };

    const command = new DeleteItemCommand(params);
    await client.send(command);

    return NextResponse.json({ message: "Status deleted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to delete status", error },
      { status: 500 }
    );
  }
}
