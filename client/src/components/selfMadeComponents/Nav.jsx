import React from 'react'
import styles from './css/Nav.module.css'
import useNav from '@/hooks/useNav'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ChecklistIcon from '@mui/icons-material/Checklist'
import ArticleIcon from '@mui/icons-material/Article'
import FilterDialog from './FilterDialog'

const Nav = ({ filterDialog, fetchFilteredProblems }) => {
    const { userNameOrLogin } = useNav()

    return (
        <div className={styles.navList}>
            <div className={styles.nav}>
                <HomeIcon />
                <div className={styles.navText}>
                    <Link href="/">ホーム</Link>
                </div>
            </div>
            <div className={styles.nav}>
                <ChecklistIcon />
                <div className={styles.navText}>
                    <Link href="/practicedProblem">生成履歴</Link>
                </div>
            </div>
            <div className={styles.nav}>
                <ArticleIcon />
                <div className={styles.navText}>
                    <Link href="/problemList">問題一覧</Link>
                </div>
            </div>
            <div className={styles.nav}>
                <AccountCircleIcon />
                <p className={styles.navText}>{userNameOrLogin}</p>
            </div>
            <div className={styles.nav}>
                <div className={styles.navText}>
                    <Link href="/aboutPPP"> PPPとは</Link>
                </div>
            </div>
            {/* FilterDialogは問題一覧ページで表示されるので
            条件分岐をしています。filterDialogにはブール値が入ります。 */}
            {filterDialog && (
                <div className={styles.nav}>
                    <div className={styles.navText}>
                        <FilterDialog
                            fetchFilteredProblems={fetchFilteredProblems}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Nav
