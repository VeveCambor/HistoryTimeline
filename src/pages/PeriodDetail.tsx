import { useParams, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PREHISTORY_SUB_PERIODS } from '../types/prehistoryPeriods'
import { HistoricalPeriod } from '../types/periods'
import Section from '../components/ui/Section'
import YearBadge from '../components/ui/YearBadge'
import Meta from '../components/ui/Meta'
import NotFound from '../components/ui/NotFound'
import Link from '../components/ui/Link'
import Button from '../components/ui/Button'

function PeriodDetail() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const navigate = useNavigate()
  const period = PREHISTORY_SUB_PERIODS.find(p => p.id === id)
  
  // Získat vybrané období z location state, nebo použít pravěk jako výchozí
  const selectedPeriod = (location.state as { selectedPeriod?: HistoricalPeriod })?.selectedPeriod || HistoricalPeriod.PREHISTORY
  
  const handleBack = () => {
    // Navigovat zpět na homepage s vybraným obdobím
    navigate('/', { state: { selectedPeriod } })
  }

  if (!period) {
    return (
      <PeriodDetailContainer>
        <NotFound title="Období nenalezeno">
          <Link to="/">
            ← Zpět na hlavní stránku
          </Link>
        </NotFound>
      </PeriodDetailContainer>
    )
  }

  return (
    <PeriodDetailContainer>
      <Header $color={period.color}>
        <Button onClick={handleBack} variant="secondary">
          ← Zpět
        </Button>
        <h1>{period.name}</h1>
        <Meta>
          <YearBadge year={period.startYear} variant="header" />
          <YearSeparator>–</YearSeparator>
          <YearBadge year={period.endYear} variant="header" />
        </Meta>
      </Header>

      <Content>
        {period.description && (
          <Section title="Popis období">
            <p>{period.description}</p>
          </Section>
        )}

        <Section title="Časové rozmezí">
          <p>
            Toto období trvalo od roku{' '}
            <strong>{period.startYear < 0 ? `${Math.abs(period.startYear)} př. n. l.` : `${period.startYear} n. l.`}</strong>{' '}
            do roku{' '}
            <strong>{period.endYear < 0 ? `${Math.abs(period.endYear)} př. n. l.` : `${period.endYear} n. l.`}</strong>.
            Trvalo tedy přibližně <strong>{Math.abs(period.endYear - period.startYear)} let</strong>.
          </p>
        </Section>

        <Section title="Charakteristika">
          <p>
            {getPeriodDescription(period.id)}
          </p>
        </Section>
      </Content>
    </PeriodDetailContainer>
  )
}

function getPeriodDescription(periodId: string): string {
  const descriptions: Record<string, string> = {
    paleolithic: 'Paleolit, neboli starší doba kamenná, je nejdelší období v historii lidstva. Začíná s prvními kamennými nástroji a končí s koncem poslední doby ledové. Lidé v této době byli lovci a sběrači, žili v malých skupinách a používali primitivní kamenné nástroje. Toto období zahrnuje vývoj člověka od prvních hominidů až po moderního člověka.',
    mesolithic: 'Mezolit, neboli střední doba kamenná, je přechodné období mezi paleolitem a neolitem. Vyznačuje se adaptací na změněné klimatické podmínky po skončení doby ledové. Lidé začali využívat nové zdroje potravy a vyvíjeli specializované nástroje pro lov a rybolov.',
    neolithic: 'Neolit, neboli mladší doba kamenná, přinesl revoluční změny v lidské společnosti. Lidé začali pěstovat plodiny a chovat zvířata, což vedlo k usedlému způsobu života a vzniku prvních osad. Objevila se keramika, tkaní a další řemesla. Toto období položilo základy pro vznik prvních civilizací.',
    copper: 'Doba měděná, také známá jako chalkolit nebo eneolit, je období, kdy lidé začali využívat měď pro výrobu nástrojů a zbraní. Měď byla první kov, který lidé začali zpracovávat. Toto období představuje přechod mezi dobou kamennou a dobou bronzovou.',
    bronze: 'Doba bronzová je charakterizována využitím bronzu, slitiny mědi a cínu, pro výrobu nástrojů, zbraní a ozdob. Bronzové předměty byly pevnější a odolnější než měděné. Toto období přineslo rozvoj obchodu, specializaci řemesel a vznik prvních městských států.',
    iron: 'Doba železná začala, když lidé začali zpracovávat železo, které je pevnější a dostupnější než bronz. Železné nástroje a zbraně změnily způsob válčení a zemědělství. Toto období vidělo vznik velkých říší a pokročilých civilizací, které položily základy pro starověk.'
  }
  return descriptions[periodId] || 'Toto období je důležitou součástí historie lidstva.'
}

export default PeriodDetail

// Styled Components
const PeriodDetailContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`

const Header = styled.div<{ $color: string }>`
  background: ${props => props.$color};
  color: white;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${props => props.$color} 0%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  button {
    margin-bottom: 1rem;
  }
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const YearSeparator = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.9;
`

