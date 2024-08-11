import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import remarkGfm from "remark-gfm";

const MarkdownViewer = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  const location = useLocation();
  const data = location.state.slice(1);
  console.log(data);
  //   ./offers/prathidhwani.md

  useEffect(() => {
    fetchMarkdown();
  }, []);

  const fetchMarkdown = async () => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/keralarehab/keralarehab.github.io/initial_template/incidents/wayanad-landslide-2024/${data}`
      );
      const text = await response.text();
      setMarkdownContent(text);
    } catch (error) {
      console.error("Error fetching markdown file:", error);
    }
  };

  return (
    <>
      <NavBar></NavBar>

      <div className="markdown-content d-flex flex-column min-vh-100 ml-5 ">
        <div class="container mt-3 ml-1">
          <Link to="/donations" class="">
            &#8592; Back to Offers Made
          </Link>
          <div id="content" class="content"></div>
        </div>
        <ReactMarkdown
          children={markdownContent}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MarkdownViewer;
