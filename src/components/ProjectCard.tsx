import { useState } from 'react'

import {
    Box, Card, CardActionArea, CardContent, CardMedia, Link, Modal, Typography
} from '@mui/material'

import { Project } from '../models/Project'

const styles = {
  card: {
    maxWidth: 350,
    margin: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  media: {},
  content: {},
  modal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fitContent',
    bgcolor: 'background.paper',
    boxShadow: 24,
    maxWidth: '95vw'
  }
}

export const ProjectCard = (project: Project) => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          sx={styles.card}
          component='img'
          image={project.thumbnailUrl}
          alt={project.title}
          onClick={handleOpenModal}
        />
        <CardContent sx={styles.content}>
          <Typography gutterBottom variant='h5' component='div'>
            {project.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {project.description}
          </Typography>
          <Link href={project.url} color='inherit'>
            {'GitHub'}
          </Link>
        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-describedby='modal-modal-description'>
        <Box sx={styles.modal}>
          <CardMedia
            component='img'
            image={project.thumbnailUrl}
            alt={project.title}
            sx={{
              objectFit: 'scale-down',
              maxHeight: '80vh'
            }}
          />
          <Typography id='modal-modal-description' sx={{ p: 2 }}>
            {project.title}
          </Typography>
        </Box>
      </Modal>
    </Card>
  )
}
