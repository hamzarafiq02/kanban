import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { ReactNode } from 'react';

const Cards: React.FC<{ children: ReactNode; onDelete: () => void }> = props => {
  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <Card className="activity__card">
      <CardContent>
        <Typography variant="body1">{props.children}</Typography>
        <IconButton aria-label="delete" size="small" onClick={handleDelete} style={{ marginLeft: '90%' }}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Cards;
