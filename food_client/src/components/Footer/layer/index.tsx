import { Typography } from "@mui/material";

export function Copyright() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body2" style={{ color: "white" }}>
        ©{new Date().getFullYear()}
        {" Pinecone Foods LLC. "}
      </Typography>
      <Typography variant="subtitle1" style={{ color: "white" }}>
        Зохиогчийн эрхээр хамгаалагдав
      </Typography>{" "}
    </div>
  );
}

export const routers = [
  { name: "Нүүр", path: "/" },
  { name: "Холбоо барих", path: "contact" },
  { name: "Хоолны цэс", path: "/menu" },
  { name: "Үйлчилгээний нөхцөл", path: "/terms" },
  { name: "Хүргэлтийн бүс", path: "map" },
  { name: "Нууцлалын бодлого", path: "securityTerms" },
];
