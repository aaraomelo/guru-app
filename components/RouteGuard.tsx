import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getProfile } from "../store/user/actionCreators";

export interface RouteGuardProps {
  children: any
}

type Props = RouteGuardProps & MapStateToPropsTypes & MapDispatchToPropsTypes;

const RouteGuard = ({ children, authenticated, checkProfile, currentUser }: Props) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const toast = useToast()

  useEffect(() => {
    if (authenticated == null) {
      const fetchData = async () => {
        await checkProfile()
      }
      fetchData();
    } else if (authenticated) {
      toast({
        title: `Olá ${currentUser.name}`,
        description: `Seja bem vindo!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }, [authenticated]);

  useEffect(() => {
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, [authenticated]);

  function authCheck(url: string) {
    const publicPaths = ['/', '/signin', '/signup'];
    if (authenticated === null) {
      setAuthorized(false);
    } else if (!authenticated && !publicPaths.includes(url)) {
      setAuthorized(false);
      toast({
        description: `É necessário autenticar-se`,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
      router.push('/signin');
    } else {
      setAuthorized(true);
    }
  }

  return (authorized && children);
}


interface MapStateToPropsTypes {
  authenticated: boolean | null;
  currentUser: UserInterface,
}

interface MapDispatchToPropsTypes {
  checkProfile: () => Promise<any>;
}

function mapStateToProps(state: any) {
  return {
    authenticated: state.user.auth,
    currentUser: state.user.currentUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    checkProfile: () => dispatch(getProfile())
  }
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (RouteGuard);

