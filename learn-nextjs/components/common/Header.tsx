import Link from "next/link";
import styles from '../../styles/header.module.scss';
import Image from "next/image";
import InflearnImg from "/public/inflearn.png";

interface Props {
  rightElements?: React.ReactElement[];
}
const HeaderComponent = ({rightElements}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image
            src={InflearnImg}
            width={110}
            height={20}
            alt="인프런 로고" 
            />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>
        {rightElements}
      </div>}
    </header>
  );
}

export default HeaderComponent;