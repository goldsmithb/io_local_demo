import { useState } from 'react';

export default function NewPostForm() {
  return (
    <form>
      <label>
        <span>Title:</span>
        <input type="text" />
      </label>
      <label>
        <span>Content:</span>
        <input type="text" />
      </label>
    </form>
  )
}