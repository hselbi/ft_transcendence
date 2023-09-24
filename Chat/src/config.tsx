// routes
import { PATH_DASHBOARD } from "./routes/paths";
import {
  enUS,
  frFR,
  zhCN,
  viVN,
  arSD,
  Localization,
} from "@mui/material/locale";

// DEFAULT ROOT PATH
export const DEFAULT_PATH = PATH_DASHBOARD.general.app; // as '/app'

export interface Settings {
  themeMode: string;
  themeDirection: string;
  themeContrast: string;
  themeLayout: string;
  themeColorPresets: string;
  themeStretch: boolean;
}

export const defaultSettings: Settings = {
  themeMode: "light",
  themeDirection: "ltr",
  themeContrast: "default",
  themeLayout: "horizontal",
  themeColorPresets: "default",
  themeStretch: false,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export interface Languages {
  label: string;
  value: string;
  systemValue: Localization;
  icon: string;
}

export const allLangs: Languages[] = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  {
    label: "French",
    value: "fr",
    systemValue: frFR,
    icon: "/assets/icons/flags/ic_flag_fr.svg",
  },
  {
    label: "Vietnamese",
    value: "vn",
    systemValue: viVN,
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
  {
    label: "Chinese",
    value: "cn",
    systemValue: zhCN,
    icon: "/assets/icons/flags/ic_flag_cn.svg",
  },
  {
    label: "Arabic (Sudan)",
    value: "ar",
    systemValue: arSD,
    icon: "/assets/icons/flags/ic_flag_sa.svg",
  },
];

export const LANG_DEFAULT:Languages = allLangs[0];