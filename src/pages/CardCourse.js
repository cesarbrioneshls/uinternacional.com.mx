import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardCourse() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639605308/PP_Doctorado_tecnolog%C3%ADas_tesvqk.png"
          alt="img_asdasd"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Doctorado En Competencias Docentes Para La Transformación Digital
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant={'contained'}
          color={'primary'}
          size="large"
          style={{ width: '100%',backgroundColor: '#a68929'}}
        >
          Conoce Mas
        </Button>
      </CardActions>
    </Card>
  );
}
