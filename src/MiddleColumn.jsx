import React, { useState } from 'react';

const MiddleColumn = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'A posted on story',
      summary: 'Today was a great day! I went out for a walk in the park and enjoyed the beautiful weather. I also met some friends and we had a wonderful time catching up. Can’t wait for more days like this!',
      image: '', // No image for the story
      postedAt: new Date().toLocaleString(),
      comments: [], // Add comments array
    },
    {
      id: 2,
      title: 'B uploaded a photo',
      summary: 'Here’s a beautiful landscape I captured.',
      image: 'https://source.unsplash.com/random/400x200?sig=2', // Random image
      postedAt: new Date().toLocaleString(),
      comments: [], // Add comments array
    },
  ]);
  
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostSummary, setNewPostSummary] = useState('');
  const [newPostImage, setNewPostImage] = useState('');
  const [showInput, setShowInput] = useState(false); // State to control visibility of input fields
  const [commenterName, setCommenterName] = useState('User'); // Default commenter name

  const addPost = () => {
    if (newPostTitle.trim() && newPostSummary.trim()) {
      const post = {
        id: Date.now(),
        title: newPostTitle,
        summary: newPostSummary,
        image: newPostImage.trim() || '', // Allow optional image
        postedAt: new Date().toLocaleString(),
        comments: [], // Initialize comments array
      };
      setPosts([post, ...posts]); // Add new post to the list
      setNewPostTitle(''); // Clear input fields
      setNewPostSummary('');
      setNewPostImage('');
      setShowInput(false); // Hide input fields after posting
    }
  };

  return (
    <div className="md:col-span-6 space-y-6">
      {/* Timeline/Newsfeed */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-gray-700 mb-2">Newsfeed</h2>
        
        {/* Button to toggle input visibility */}
        <button
          onClick={() => setShowInput(!showInput)} // Toggle the input fields
          className="mb-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {showInput ? 'Cancel' : 'Post'}
        </button>

        {/* Input for adding new post */}
        {showInput && (
          <div className="mb-4">
            <input
              type="text"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              placeholder="Post Title"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={newPostSummary}
              onChange={(e) => setNewPostSummary(e.target.value)}
              placeholder="Post Summary"
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
            <input
              type="text"
              value={newPostImage}
              onChange={(e) => setNewPostImage(e.target.value)}
              placeholder="Image URL (optional)"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
            <button
              onClick={addPost}
              className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Submit Post
            </button>
          </div>
        )}

        {/* Display list of posts */}
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-2" />
              )}
              <h3 className="font-semibold text-lg text-gray-800">{post.title}</h3>
              <p className="text-gray-600">{post.summary}</p>
              <span className="text-sm text-gray-500">Posted on: {post.postedAt}</span>

              {/* Comments Section */}
              <div className="mt-4">
                <h4 className="font-semibold">Comments:</h4>
                <div className="space-y-2">
                  {post.comments.map((comment, index) => (
                    <p key={index} className="border border-gray-300 p-2 rounded-md">
                      <strong>{comment.name}: </strong>
                      {comment.text}
                    </p>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                  onChange={(e) => setCommenterName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value) {
                      const updatedPosts = posts.map(p => {
                        if (p.id === post.id) {
                          return {
                            ...p,
                            comments: [...p.comments, { name: commenterName || 'User', text: e.target.value }],
                          };
                        }
                        return p;
                      });
                      setPosts(updatedPosts);
                      e.target.value = ''; // Clear input after submission
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleColumn;
