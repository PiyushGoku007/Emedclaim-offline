import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { BACKEND_BASE_URL } from "@/config";

function DocsPreview(props: any) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  return (
    <Grid container>
      {props.documents.medical_Bills.length !== 0 && (
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            mb="5px"
          >
            Medical Bills
          </Typography>
        </Grid>
      )}

      {props.documents.medical_Bills.map((item: any) => {
        return (
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            key={item}
            xs={2.5}
            pl={4}
          >
            {item.endsWith("pdf") ? (
              <Link
                target="_blank"
                href={`${BACKEND_BASE_URL}/medicalBill/${item}`}
              >
                <PictureAsPdfIcon fontSize="large" sx={{ color: "red" }} />
              </Link>
            ) : (
              <Link
                target="_blank"
                href={`${BACKEND_BASE_URL}/medicalBill/${item}`}
              >
                <ImageIcon fontSize="large" color="primary" />
              </Link>
            )}
            {item}
          </Grid>
        );
      })}

      {props.documents.test_Reports.length !== 0 && (
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            mb="5px"
          >
            Test Reports
          </Typography>
        </Grid>
      )}

      {props.documents.test_Reports.map((item: any) => {
        return (
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            key={item}
            xs={2.5}
          >
            {item.endsWith("pdf") ? (
              <Link
                target="_blank"
                href={`${BACKEND_BASE_URL}/medicalBill/${item}`}
              >
                <PictureAsPdfIcon fontSize="large" sx={{ color: "red" }} />
              </Link>
            ) : (
              <Link
                target="_blank"
                href={`${BACKEND_BASE_URL}/medicalBill/${item}`}
              >
                <ImageIcon fontSize="large" color="primary" />
              </Link>
            )}
            {item}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DocsPreview;
