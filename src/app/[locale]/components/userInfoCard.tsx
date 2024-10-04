import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
// import classes from './UserInfoIcons.module.css';

export default function UserInfoIcons() {
  return (
    <div className="flex items-start">
  {/* Container for Avatar and Contact Info */}
  <div className="flex flex-col items-center ml-5">
    {/* Contact Information Container */}
    <div className="text-center">
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Software Engineer
      </Text>

      <Text fz="lg" fw={500}>
        Raul Marin
      </Text>

      <Group wrap="nowrap" gap={15} mt={1} className="flex items-center justify-center">
        <IconAt stroke={1.5} size="1rem" className="inline-block" />
        <Text fz="xs" c="dimmed" className="inline-block">
          raulm0429@icloud.com
        </Text>
      </Group>

      <Group wrap="nowrap" gap={15} mt={1} className="flex items-center justify-center">
        <IconPhoneCall stroke={1.5} size="1rem" className="inline-block" />
        <Text fz="xs" c="dimmed" className="inline-block">
          +1 (316) 925-3695
        </Text>
      </Group>
    </div>

    {/* Avatar */}
    <Avatar
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      size={50}
      radius="md"
      className="mt-2" // Add some margin to separate the avatar from the text
    />
  </div>
</div>

  );
}