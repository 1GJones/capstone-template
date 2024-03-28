// import { query } from 'express';
import React from "react";
import Books from "../components/books";



function CommunityPage() {
  return (
    <div className="community-page">
      <h2 className="availableBooks">Books Available</h2>
      <div>
      <Books/>
      </div>
    </div>
  );
}

export default CommunityPage;
