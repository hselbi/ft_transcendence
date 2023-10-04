import * as React from "react";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList, TabsListProps } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel, TabPanelProps } from "@mui/base/TabPanel";
import { Tab as BaseTab, TabProps } from "@mui/base/Tab";
import { useTheme } from "@mui/system";
import clsx from "clsx";
import { UserCircle, UserSquare, UsersFour, UsersThree } from "phosphor-react";
import Channels from "./Channels";
import Privates from "./Privates";
import All from "./All";
import Friends from "./Friends";

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === "function" ? fn(args) : fn;

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  (props, ref) => {
    const { className, ...other } = props;
    return (
      <BaseTabsList
        ref={ref}
        className={clsx(
          "rounded-t-4xl mx-1 bg-transparent flex font-sans items-center justify-center content-between min-w-tabs-list",
          className
        )}
        {...other}
      />
    );
  }
);

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  (props, ref) => {
    const { className, ...other } = props;
    return (
      <BaseTabPanel
        ref={ref}
        className={clsx(
          "py-5 px-3 bg-white dark:bg-[#806EA9] border-slate-200 dark:border-slate-700 rounded-2xl w-full h-full font-sans text-sm",
          className
        )}
        {...other}
      />
    );
  }
);

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === "dark";
}

const ChatTabs = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab value={0}>
            <UserCircle size={19} />
          </Tab>
          <Tab value={1}>All</Tab>
          <Tab value={2}>Private</Tab>
          <Tab value={3}>Channels</Tab>
        </TabsList>
        <TabPanel value={0}>
          {" "}
          <Friends />
        </TabPanel>
        <TabPanel value={1}>
          <All />
        </TabPanel>
        <TabPanel value={2}>
          <Privates />
        </TabPanel>
        <TabPanel value={3}>
          <Channels />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ChatTabs;

const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  return (
    <BaseTab
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `font-sans ${
                ownerState.selected
                  ? "text-[#443263] bg-[#806EA9]"
                  : "text-[#806EA9] bg-[#443263] focus:text-[#EADDFF] hover:bg-[#514371B8]"
              } ${
                ownerState.disabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              } shadow-2xl text-sm leading-[1.3] font-semibold w-full py-2.5 px-3 m-1.5 mb-0 border-0 rounded-t-2xl flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
              resolvedSlotProps?.className
            ),
          };
        },
      }}
    />
  );
});
