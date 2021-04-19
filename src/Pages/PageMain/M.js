import {Box ,Divider ,makeStyles ,Select ,Switch ,TextField } from '@material-ui/core';
import React, { useState } from 'react';
import HeaderLeft from '../../Components/HdL/HdL';
import MenuTree from '../../Components/Menu01/Menu01';
import SubMenuItems from '../../Components/MenuI/MenuI02';
import HeaderRight from '../../Components/HdR/HdR';
import {LABEL_PESQUISA ,LANGUAGES ,LABEL_NOVO} from '../../Constants/Lgg/Lgg';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.paper,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
	leftContainer: {
		backgroundColor: theme.palette.background.default,
		resize: 'horizontal',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column',
		minWidth: '200px',
		maxWidth: '450px',
	},
	leftHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '15px',
	},
	rightContainer: {
		padding: '10px',
		width: '100%',
	},
	menuTree: {},
	rightHeader: {
		display: 'flex',
		flexDirection: 'column',
	},
	rightContentArea: {},
}));

const Main = ({ handleDarkMode, darkMode, onLogin }) => {
	const styles = useStyles();
	const [subMenuItens, setSubMenuItens] = useState([]);
	const [language, setLanguage] = useState(LANGUAGES.PTBR);
	const [selectedInboxId, setSelectedInboxId] = useState(11);
	const [selectedRowsIds, setSelectedRowsIds] = useState([]);

	const onArchive = () => {
		setSubMenuItens(
			subMenuItens.filter((item) => !selectedRowsIds.includes(item.id))
		);
	};

	const handleChangeInbox = (id) => {
		setSelectedInboxId(id);
	};

	return (
		<Box container className={styles.root}>
			<Box container className={styles.leftContainer} xs={3} direction="column">
				<Box className={styles.leftHeader}>
					<HeaderLeft />
					<Select value={LABEL_NOVO[language]}>
						<option value={LABEL_NOVO[language]}>{LABEL_NOVO[language]}</option>
					</Select>
				</Box>
				<Box mx={2}>
					<Divider />
				</Box>
				<Box className={styles.menuTree}>
					<MenuTree handleChangeInbox={handleChangeInbox} />
				</Box>
			</Box>

			<Box
				container
				className={styles.rightContainer}
				xs={9}
				direction="column"
			>
				<Box className={styles.rightHeader}>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box width="90%">
							<TextField
								size="small"
								fullWidth
								label={LABEL_PESQUISA[language]}
								variant="outlined"
							/>
						</Box>
						<Switch checked={darkMode} onChange={handleDarkMode} />
						<Select
							variant="standard"
							value={language}
							onChange={(e) => setLanguage(e.target.value)}
						>
							{Object.values(LANGUAGES).map((item, index) => (
								<option key={index} value={item}>
									{item}
								</option>
							))}
						</Select>
					</Box>

					<HeaderRight onArchive={onArchive} language={language} />

					<SubMenuItems
						id={selectedInboxId}
						selectedRowsIds={selectedRowsIds}
						setSelectedRowsIds={setSelectedRowsIds}
						subMenuItens={subMenuItens}
						setSubMenuItens={setSubMenuItens}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Main;