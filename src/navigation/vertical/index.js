// ** Icon imports
import Login from 'mdi-material-ui/Login'
import WalletIcon from '@mui/icons-material/Wallet';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutline from 'mdi-material-ui/HomeOutline'
import LinkIcon from '@mui/icons-material/Link';
import Person2Icon from '@mui/icons-material/Person2';
import HistoryIcon from '@mui/icons-material/History';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import PaymentIcon from '@mui/icons-material/Payment';
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },

  
    {
      title: 'Security',
      icon: LockOpenIcon,
      path:'/security',
     
     
    },
    {
      title: 'Deposit',
      icon: AttachMoneyIcon,
      path:'/deposite'
   
     
    },
    {
      title: 'withdraw',
      icon: PaymentIcon,
 
   
    },
    {
      title:'Referral Code',
      icon: LinkIcon,
    },
    {
      title:' Purchase',
      icon: InventoryIcon,
    },
    {
            title:'Re - Invest',
            icon:AttachMoneyIcon,
    },
    {
      title:'All Referral',
      icon:LinkIcon,
    },
    {
      title:'About',
      icon:InfoOutlinedIcon,
      path:'/about'
   },
    {
      title:'History',
      icon: HistoryIcon,
      path:'/history'
    },

    
 
    
  ]
}

export default navigation
