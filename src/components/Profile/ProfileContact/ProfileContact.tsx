import { FC } from "react";

interface ProfileContactProps {
  contactName: string;
  contactValue: string | null;
}

const ProfileContact: FC<ProfileContactProps> = ({
  contactName,
  contactValue,
}) => {
  return <div>{contactValue && contactName}</div>;
};

export default ProfileContact;
