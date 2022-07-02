import { Avatar, Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BsBriefcase, BsCalendarCheck, BsEnvelope } from "react-icons/bs";
import { FaBirthdayCake, FaHome } from "react-icons/fa";
import { MdOutlineGroupWork } from "react-icons/md";
import { GroupsList } from "./GroupsList/GroupsList";
import { SidebarBio } from "./SidebarBio/SidebarBio";
import { SidebarTab } from "./SidebarTab/SidebarTab";

export const Sidebar: FC = () => {
  return (
    <Stack position="sticky" top="20" spacing={4} direction="column">
      {/* profile */}
      <Box rounded="md" p={5} shadow="md" borderWidth="1px">
        <Flex direction="column" alignItems="center" mb="3">
          <Heading fontSize="xl" textAlign="center" mb="3">
            John Doe
          </Heading>
          <Avatar size="xl" />
        </Flex>
        <hr />
        <Stack spacing="4" w="full" my="5">
          <SidebarBio SidebarIcon={BsBriefcase} title="Web Developer" />
          <SidebarBio SidebarIcon={FaHome} title="Lam Dong, Vietnam" />
          <SidebarBio SidebarIcon={FaBirthdayCake} title="February 5, 2005" />
        </Stack>
      </Box>

      {/* tabs */}
      <Box bg="primary" shadow="md">
        <SidebarTab
          to="/user/groups"
          SidebarIcon={MdOutlineGroupWork}
          title="My Groups"
        />
        <SidebarTab
          to="/user/events"
          SidebarIcon={BsCalendarCheck}
          title="My Events"
        />
        <SidebarTab
          to="/user/posts"
          SidebarIcon={BsEnvelope}
          title="My Posts"
        />
      </Box>

      <Box shadow="md" rounded="md">
        <Heading size="sm" p="3">
          Top Growing Groups
        </Heading>
        <hr />
        <Stack my="2">
          <GroupsList />
        </Stack>
      </Box>
    </Stack>
  );
};
