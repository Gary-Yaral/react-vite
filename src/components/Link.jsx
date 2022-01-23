

export function Link(props) {

  const { sectionId, section } = props;

  return (
    <a className = "link" href={ sectionId }>{section}</a>
  )
}


