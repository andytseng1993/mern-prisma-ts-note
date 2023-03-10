import { Badge, Card, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Tag } from './CategoryNoteList'

interface NotecardProps {
	id: string
	title: string
	category: {
		id: string
	}
	tags: Tag[]
}
const Notecard = ({ id, title, category, tags }: NotecardProps) => {
	return (
		<Card
			as={Link}
			to={`/${category.id}/note/${id}`}
			className={'text-reset text-decoration-none h-100'}
		>
			<Card.Body>
				<Stack
					gap={2}
					className="align-items-center justify-content-center h-100"
				>
					<span className="d-flex flex-wrap justify-content-center align-items-center my-2 fs-3 w-75 text-break">
						{title}
					</span>
					<Stack
						gap={1}
						direction="horizontal"
						className="justify-content-center align-items-center flex-wrap"
					>
						{tags.length > 0
							? tags.map((tag: Tag) => (
									<Badge key={tag.id} className="text-truncate fs-7">
										{tag.label}
									</Badge>
							  ))
							: null}
					</Stack>
				</Stack>
			</Card.Body>
		</Card>
	)
}

export default Notecard
