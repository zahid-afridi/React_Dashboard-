const UserIcon = props => {
  // ** Props
  const { icon, iconProps } = props
  const IconTag = icon
  let styles

  /* styles = {
      color: 'red',
    } */
  // @ts-ignore
  return <IconTag {...iconProps} style={{ ...styles }} />

}

export default UserIcon