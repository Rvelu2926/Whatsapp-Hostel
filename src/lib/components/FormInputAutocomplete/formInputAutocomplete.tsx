import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<any>([])
  const loading = open && options.length === 0

  const onChangeHandle = async (value: any) => {
    // this default api does not support searching but if you use google maps or some other use the value and post to get back you reslut and then set it using setOptions
    console.log(value)

    const response = await axios({
      method: 'get',
      url: 'https://country.register.gov.uk/records.json?page-size=5000',
    })
    console.log(response)

    //  setOptions(Object.keys(response).map((key) => response[key].item[0]));
  }

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      getOptionLabel={(option: any) => option.name}
      options={options}
      loading={loading}
      renderInput={(params: any) => (
        <TextField
          {...params}
          label="Asynchronous"
          variant="outlined"
          onChange={(ev: any) => {
            // dont fire API if the user delete or not entered anything
            if (ev.target.value !== '' || ev.target.value !== null) {
              onChangeHandle(ev.target.value)
            }
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}
