import UserImage from "./Template/UserImage"; // pastikan ini huruf besar

const UserImages = [
  {
    src: "/Elements/Sprikel1.png",
    alt: "User 1",
  },
  {
    src: "/Elements/Sprikel2.png",
    alt: "User 2",
  },
  {
    src: "/Elements/Sprikel3.png",
    alt: "User 3",
  },
  {
    src: "/Elements/Sprikel4.png",
    alt: "User 4",
  },
  {
    src: "/Elements/Sprikel5.png",
    alt: "User 5",
  },
  {
    src: "/Elements/Sprikel6.png",
    alt: "User 6",
  },
  {
    src: "/Elements/Sprikel7.png",
    alt: "User 6",
  },
];

export default function UserList() {
  return (
    <div className="flex flex-wrap justify-center items-center mb-10">
      {UserImages.map((image, index) => (
        <UserImage
          key={index}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
