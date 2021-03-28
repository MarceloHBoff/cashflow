import { Container } from './styles'

export default function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Trampo</td>
            <td className="green">R$ 1000,00</td>
            <td>Trabalho</td>
            <td>28/03/2021</td>
          </tr>
          <tr>
            <td>Trampo</td>
            <td className="red">- R$ 1000,00</td>
            <td>Trabalho</td>
            <td>28/03/2021</td>
          </tr>
          <tr>
            <td>Trampo</td>
            <td className="red">- R$ 1000,00</td>
            <td>Trabalho</td>
            <td>28/03/2021</td>
          </tr>
          <tr>
            <td>Trampo</td>
            <td className="green">R$ 1000,00</td>
            <td>Trabalho</td>
            <td>28/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
