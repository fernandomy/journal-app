import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import JournalLayout from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          position: 'fixed',
          right: 50,
          bottom: 50,
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
