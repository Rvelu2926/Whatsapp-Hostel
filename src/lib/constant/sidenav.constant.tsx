import DashboardIcon from '@mui/icons-material/Dashboard'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FeedbackIcon from '@mui/icons-material/Feedback'
import RequestPageIcon from '@mui/icons-material/RequestPage'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'

export const sideData = [
  {
    title: 'Dashboard',
    path: '/admin-dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Complaint Form',
    path: '/complaint',
    icon: <FeedbackIcon />,
  },
  {
    title: 'Enquiry Form',
    path: '/enquiry',
    icon: <ChatBubbleOutlineIcon />,
  },
  {
    title: 'Expenses',
    path: '/',
    icon: <RequestPageIcon />,
  },
  {
    title: 'Tenent Form',
    path: '/admin-dashboard',
    icon: <FolderOpenIcon />,
  },
]