interface Film {
  label: string
  year: number
  disabled?: boolean
}

// Top 10 films as rated by IMDb users. http://www.imdb.com/chart/top
export const top10Films: Film[] = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972, disabled: true },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008, disabled: true },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
]
