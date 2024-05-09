import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const BlogItemDetails = () => {
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // Access route parameter using useParams hook

  useEffect(() => {
    const getBlogItemData = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
        const data = await response.json();

        const updatedData = {
          title: data.title,
          imageUrl: data.image_url,
          content: data.content,
          avatarUrl: data.avatar_url,
          author: data.author,
        };

        setBlogData(updatedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog item data:", error);
      }
    };

    getBlogItemData();
  }, [id]);

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  return (
    <div className="blog-container">
      {isLoading ? (
        <TailSpin color="#00BFFF" height={50} width={50} />
      ) : (
        renderBlogItemDetails()
      )}
    </div>
  );
};

export default BlogItemDetails;
