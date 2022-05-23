import { FC } from "react";

interface ProfileContactProps {
  contactName: string;
  contactValue: string | null;
}

const ProfileContact: FC<ProfileContactProps> = ({
  contactName,
  contactValue,
}) => (
  <>
    {contactValue ? (
      <div>
        {contactName}: <span className="opacity-70 ml-1">{contactValue}</span>
      </div>
    ) : null}
  </>
);

export default ProfileContact;
