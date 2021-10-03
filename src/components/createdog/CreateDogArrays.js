import "./CreateDog.css";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function CreateDogArrays({
  calm,
  setCalm,
  easygoing,
  setEasygoing,
  courageous,
  setCourageous,
  territorial,
  setTerritorial,
  intelligent,
  setIntelligent,
  patient,
  setPatient,
  loyal,
  setLoyal,
  affectionate,
  setAffectionate,
  hyperactive,
  setHyperactive,
  anxious,
  setAnxious,
  aggressive,
  setAggressive,
}) {
  return (
    <div className="createdog-arrays">
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">character</FormLabel>
        <FormGroup>
          <div className="createdog-character">
            <FormControlLabel
              control={
                <Checkbox
                  checked={calm}
                  onClick={(e) => setCalm(e.target.value)}
                  name="calm"
                />
              }
              label="calm"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={easygoing}
                  onClick={(e) => setEasygoing(e.target.value)}
                  name="easy going"
                />
              }
              label="easy going"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={courageous}
                  onClick={(e) => setCourageous(e.target.value)}
                  name="courageous"
                />
              }
              label="courageous"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={territorial}
                  onChange={(e) => setTerritorial(e.target.value)}
                  name="territorial"
                />
              }
              label="territorial"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={intelligent}
                  onChange={(e) => setIntelligent(e.target.value)}
                  name="intelligent"
                />
              }
              label="intelligent"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={patient}
                  onChange={(e) => setPatient(e.target.value)}
                  name="patient"
                />
              }
              label="patient"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={loyal}
                  onChange={(e) => setLoyal(e.target.value)}
                  name="loyal"
                />
              }
              label="loyal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={affectionate}
                  onChange={(e) => setAffectionate(e.target.value)}
                  name="affectionate"
                />
              }
              label="affectionate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hyperactive}
                  onChange={(e) => setHyperactive(e.target.value)}
                  name="hyper active"
                />
              }
              label="hyper active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={anxious}
                  onChange={(e) => setAnxious(e.target.value)}
                  name="anxious"
                />
              }
              label="anxious"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={aggressive}
                  onChange={(e) => setAggressive(e.target.value)}
                  name="aggressive"
                />
              }
              label="aggressive"
            />
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CreateDogArrays;
