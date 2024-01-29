import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";
import PageviewIcon from "@mui/icons-material/Pageview";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { uniqueId } from "lodash";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import ApprovalIcon from "@mui/icons-material/Approval";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Menuitems: any = {
  "Admin(Diary Entry)": [
    // {
    //   navlabel: true,
    //   subheader: "Home",
    // },
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/dashboard",
    },
    {
      id: uniqueId(),
      title: "Dak Entry",
      icon: EditNoteIcon,
      href: "/DakEntry",
    },
  ],
  "Admin(Assistant Diary Entry)": [
    // {
    //   navlabel: true,
    //   subheader: "Home",
    // },
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/dashboard",
    },

    {
      id: uniqueId(),
      title: "Assistant Diary",
      icon: EditNoteIcon,
      href: "/AssistantDiary",
    },
  ],
  "Admin(ASO)": [
    // {
    //   navlabel: true,
    //   subheader: "Home",
    // },
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/dashboard",
    },

    {
      id: uniqueId(),
      title: "Reimbursement",
      icon: AccountBalanceIcon,
      href: "/Reimbursement",
    },

    {
      id: uniqueId(),
      title: "Bill Entry",
      icon: EditNoteIcon,
      href: "/BillEntry",
    },

    {
      id: uniqueId(),
      title: "Completed Files",
      icon: CheckCircleIcon,
      href: "/CompletedFile",
    },
  ],
  "Admin(JS)": [
    // {
    //   navlabel: true,
    //   subheader: "Home",
    // },
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/dashboard",
    },

    {
      id: uniqueId(),
      title: "Bill Approval",
      icon: ApprovalIcon,
      href: "/BillApproval",
    },

    {
      id: uniqueId(),
      title: "Role Distribution",
      icon: AccountCircleIcon,
      href: "/RoleDist",
    },
    {
      id: uniqueId(),
      title: "Completed Files",
      icon: CheckCircleIcon,
      href: "/CompletedFile",
    },
  ],
  "Admin(US)": [
    // {
    //   navlabel: true,
    //   subheader: "Home",
    // },
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/dashboard",
    },
    {
      id: uniqueId(),
      title: "Dak Entry",
      icon: EditNoteIcon,
      href: "/DakEntry",
    },

    {
      id: uniqueId(),
      title: "Assistant Diary",
      icon: EditNoteIcon,
      href: "/AssistantDiary",
    },
    {
      id: uniqueId(),
      title: "Reimbursement",
      icon: AccountBalanceIcon,
      href: "/Reimbursement",
    },

    {
      id: uniqueId(),
      title: "Bill Approval",
      icon: ApprovalIcon,
      href: "/BillApproval",
    },
    {
      id: uniqueId(),
      title: "Approved Files",
      icon: ThumbUpOffAltIcon,
      href: "/Approved",
    },
    {
      id: uniqueId(),
      title: "Bill Entry",
      icon: EditNoteIcon,
      href: "/BillEntry",
    },
    {
      id: uniqueId(),
      title: "Role Distribution",
      icon: AccountCircleIcon,
      href: "/RoleDist",
    },
    {
      id: uniqueId(),
      title: "Completed Files",
      icon: CheckCircleIcon,
      href: "/CompletedFile",
    },
  ],
  User: [
    // {
    //   navlabel: true,
    //   subheader: "Home",
    // },
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/dashboard",
    },
    {
      id: uniqueId(),
      title: "Dak Entry",
      icon: EditNoteIcon,
      href: "/DakEntry",
    },

    {
      id: uniqueId(),
      title: "Assistant Diary",
      icon: EditNoteIcon,
      href: "/AssistantDiary",
    },
    {
      id: uniqueId(),
      title: "Reimbursement",
      icon: AccountBalanceIcon,
      href: "/Reimbursement",
    },

    {
      id: uniqueId(),
      title: "Bill Approval",
      icon: ApprovalIcon,
      href: "/BillApproval",
    },
    {
      id: uniqueId(),
      title: "Approved Files",
      icon: ThumbUpOffAltIcon,
      href: "/Approved",
    },
    {
      id: uniqueId(),
      title: "Bill Entry",
      icon: EditNoteIcon,
      href: "/BillEntry",
    },
    {
      id: uniqueId(),
      title: "Role Distribution",
      icon: AccountCircleIcon,
      href: "/RoleDist",
    },
    {
      id: uniqueId(),
      title: "Completed Files",
      icon: CheckCircleIcon,
      href: "/CompletedFile",
    },
  ],
  "Admin(Super)": [
    // {
    //   navlabel: true,
    //   subheader: "Home",
    // },
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/dashboard",
    },
    {
      id: uniqueId(),
      title: "Dak Entry",
      icon: EditNoteIcon,
      href: "/DakEntry",
    },

    {
      id: uniqueId(),
      title: "Assistant Diary",
      icon: EditNoteIcon,
      href: "/AssistantDiary",
    },
    {
      id: uniqueId(),
      title: "Reimbursement",
      icon: AccountBalanceIcon,
      href: "/Reimbursement",
    },
    // {
    //   id: uniqueId(),
    //   title: "Bill Approval",
    //   icon: ApprovalIcon,
    //   href: "/BillApproval",
    // },
    {
      id: uniqueId(),
      title: "Approved Files",
      icon: ThumbUpOffAltIcon,
      href: "/Approved",
    },
    {
      id: uniqueId(),
      title: "Bill Entry",
      icon: EditNoteIcon,
      href: "/BillEntry",
    },
    {
      id: uniqueId(),
      title: "Role Distribution",
      icon: AccountCircleIcon,
      href: "/RoleDist",
    },
    {
      id: uniqueId(),
      title: "Completed Files",
      icon: CheckCircleIcon,
      href: "/CompletedFile",
    },
  ],
};

export default Menuitems;
