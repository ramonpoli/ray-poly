"use client";
import { Link, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const PostSuccess = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Thank you for your interest, I&apos;ll be in contact soon!</h1>
      <Link onClick={() => router.back()}>
        <Typography variant="h6" sx={{ cursor: "pointer" }}>
          Go back
        </Typography>
      </Link>
    </div>
  );
};

export default PostSuccess;
