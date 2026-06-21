import styles from "./Avatar.module.css";

interface AvatarProps {
  name: string;
  size?: number;
}

export function Avatar({ name, size = 40 }: AvatarProps) {
  const src = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(
    name,
  )}`;

  return (
    <img
      className={styles.avatar}
      src={src}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
    />
  );
}
