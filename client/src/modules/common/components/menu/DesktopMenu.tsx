import { Link } from 'react-router-dom'
import { Button, createStyles, Menu, Tooltip } from '@mantine/core'
import { clsx } from 'clsx'

const DESKTOP_NAVIGATION = [
  {
    id: '1',
    title: 'Aktualności',
    children: [
      {
        id: '1.1',
        title: 'Ogłoszenia',
        label: 'Sprawdź ostatnie ogłoszenia i newsy fabularne od Administracji',
        href: '/',
      },
      {
        id: '1.2',
        title: 'Aktualizacje',
        label: 'Przejdź do spisu ostatnio wprowadzonych aktualizacji',
        href: '/',
      },
      {
        id: '1.3',
        title: 'Poszukiwania',
        label: 'Sprawdź propozycje Graczy odnośnie wspólnej fabuły',
        href: '/',
      },
    ],
  },
  {
    id: '2',
    title: 'Fabuła',
    children: [
      {
        id: '2.1',
        title: 'Informacje',
        label: 'Aktualny opis obowiązującej fabuły',
        href: '/',
      },
      {
        id: '2.2',
        title: 'Organizacje',
        label: 'Spis wszystkich dostępnych gildii i organizacji dla Graczy',
        href: '/',
      },
      {
        id: '2.3',
        title: 'Mapa świata',
        label: 'Przejdź do zakładki z mapą świata ze szczegółowym podziałem na terytoria',
        href: '/',
      },
      {
        id: '2.4',
        title: 'Encyklopedia',
        label: 'Przejdź do oóglnego spisu dostepnych dla Gracza państw i krain',
        href: '/',
      },
      {
        id: '2.5',
        title: 'Magie',
        label: 'Spis wszystkich dostepnych magii w odpowiednich kategoriach',
        href: '/',
      },
      {
        id: '2.6',
        title: 'Umiejętności',
        label: 'Spis wszystkich dostepnych zwykłych i magicznych umiejętności',
        href: '/',
      },
    ],
  },
  {
    id: '3',
    title: 'Poradniki',
    children: [
      {
        id: '3.1',
        title: 'Statystyki',
        label: 'Poradnik dotyczący rozwijania postaci pod kątem statystyk, ich opis, a także jak je zwiększać',
        href: '/',
      },
      {
        id: '3.2',
        title: 'Magie',
        label: 'Poradnik dotyczący jak działa magia, czym róznią sie poszczególne poziomy i jak tworzyc własne',
        href: '/',
      },
      {
        id: '3.3',
        title: 'Umiejętności',
        label: 'Poradnik opisujący umiejętności postaci, to jaki wpływ mają na rozwój, jak je zdobywać, a także jak tworzyć własne',
        href: '/',
      },
      {
        id: '3.4',
        title: 'Misje i wydarzenia',
        label:
          'Poradnik dotyczący prowadzenia i odbywania misji oraz wydarzeń specjalnych, nagród za poszczególne poziomy oraz informacje o tym jak zostać Mistrzem Gry',
        href: '/',
      },
      {
        id: '3.5',
        title: 'Obrażenia i system leczenia',
        label: 'Poradnik poświęcony podstawowej czynności jaką jest leczenie ran i rodzaje obrażeń, z którymi może mieć do czynienia Gracz',
        href: '/',
      },
      {
        id: '3.6',
        title: 'Śmierć',
        label: 'Poradnik dotyczący rodzajów śmierci i ewentualnego powrotu do gry',
        href: '/',
      },
      {
        id: '3.7',
        title: 'Inne',
        label: 'Spis pozostałych poradników, które skupiają sie na mniej istotnych rzeczach, lecz mających wpływ na rozgrywkę',
        href: '/',
      },
    ],
  },
  {
    id: '4',
    title: 'Społeczność',
    children: [
      {
        id: '4.1',
        title: 'Lista magów',
        label: 'Przejdź do listy użytkowników',
        href: '/',
      },
      {
        id: '4.2',
        title: 'Osiągnięcia',
        label: 'Przejdź do listy osiągnięć możliwych do zdobycia',
        href: '/',
      },
      {
        id: '4.3',
        title: 'Kontakt',
        label: 'Zerknij w jaki sposób możesz najszybciej skontaktować się z administracją',
        href: '/',
      },
    ],
  },
]

const useStyles = createStyles((theme) => ({
  menuItem: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[3],
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      color: theme.colors.indigo[5],
    },
  },
  menuDropdown: {
    backgroundColor: theme.colors.dark[5],
    borderColor: theme.colors.dark[3],
  },
  menuDropdownItem: {
    color: theme.colors.gray[3],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.dark[3],
    },
  },
}))

function DesktopMenu() {
  const { classes } = useStyles()

  return (
    <div className={'flex items-center'}>
      {DESKTOP_NAVIGATION.map(({ id, title, children }) => (
        <Menu key={id} width={200} openDelay={100} closeDelay={100}>
          <Menu.Target>
            <Button variant={'subtle'} className={clsx('duration-100 p-0 h-auto mr-8', classes.menuItem)}>
              {title}
            </Button>
          </Menu.Target>
          <Menu.Dropdown className={classes.menuDropdown}>
            {children.map(({ id: childId, title, label, href }) => (
              <Tooltip key={childId} label={label} position={'bottom'} width={250} multiline>
                <Menu.Item component={Link} to={href} className={clsx('duration-100', classes.menuDropdownItem)}>
                  {title}
                </Menu.Item>
              </Tooltip>
            ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  )
}

export default DesktopMenu
