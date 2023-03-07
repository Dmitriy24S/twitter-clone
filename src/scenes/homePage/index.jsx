import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from 'scenes/navbar'
import UserWidget from '../widgets/UserWidget'

const HomePage = () => {
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px)')
  console.log('isNonMobileScreen:', isNonMobileScreen)
  // const userId = useSelector((state) => state.user._id)
  const { _id, picturePath } = useSelector((state) => state.user)
  return (
    <Box>
      <Navbar />
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreen ? 'flex' : 'block'}
        gap='0.5rem'
        justifyContent='space-between'
      >
        {/* <h1>HomePage</h1> */}
        <Box
          flexBasis={isNonMobileScreen ? '26%' : undefined} // !
        >
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? '42%' : undefined}
          mt={isNonMobileScreen ? undefined : '2rem'}
          // on smaller screen stacked give spacing?
        >
          Posts Widgets
        </Box>
        {/* FRIEND LIST DESKTOP ONLY? */}
        {isNonMobileScreen && (
          <Box flexBasis={isNonMobileScreen ? '26%' : undefined}>Friends Widgets</Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
