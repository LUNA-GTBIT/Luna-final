// src/components/AdminPanel/AdminPanel.jsx
import React, { useState } from 'react';
import { collection, addDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from './firebase.js';
import "./AdminPanel.css"

function AdminPanel() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        content,
        createdAt: new Date()
      });
      alert('Blog posted successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error posting blog:', error);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Are you sure you want to delete all blogs?')) {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const deletePromises = querySnapshot.docs.map((docSnapshot) =>
          deleteDoc(doc(db, 'blogs', docSnapshot.id))
        );
        await Promise.all(deletePromises);
        alert('All blogs deleted successfully!');
      } catch (error) {
        console.error('Error deleting blogs:', error);
      }
    }
  };

  return (
    <div className="admin-panel">
      <h2>Post a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post Blog</button>
      </form>
      
      <button 
        style={{ marginTop: '20px', backgroundColor: '#ff4d4d' }} 
        onClick={handleClearAll}
      >
        Clear All Blogs
      </button>
    </div>
  );
}

export default AdminPanel;
