import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import { Can } from '../components/Can';

export default function Dashboard() {
  const { user, isAuthenticated } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({ 
    permissions: ['metrics.list']
  })

  return (
    <>
      <h1>Dashboard {user?.email}</h1>
      
      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response);

  return {
    props: {}
  }
})