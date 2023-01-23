import React from "react";
import { Pagination } from "antd";
import "./MovieFooter.css";

interface FooterProps {
  page: number;
  setPage: (page: number) => void;
}

const MovieFooter = ({ page, setPage }: FooterProps): JSX.Element => {
  return (
    <div className="pagination">
      <Pagination
        current={page}
        total={50}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
};

export default MovieFooter;
