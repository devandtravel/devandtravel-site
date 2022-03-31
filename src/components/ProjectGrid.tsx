import { Box, Grid } from '@mui/material'

import data from '../models/data'
import { ProjectCard } from './ProjectCard'

export const ProjectGrid = () => (
  <Box sx={{ flexGrow: 1, padding: 2 }}>
    <Grid
      container
      spacing={{ xs: 2, md: 1 }}
      columns={{ xs: 4, sm: 8, md: 12 }}>
      {data.projects.map((project, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  </Box>
)
