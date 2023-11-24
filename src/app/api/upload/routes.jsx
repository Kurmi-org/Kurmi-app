import { NextResponse } from "next/server"
export function POST(url, data) {
    return
}

export function GET(url) {
  return fetch(url)
}

export function PUT(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
}

export function DELETE(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}