import styles from "./form.module.css";
import { useState } from "react";
import verify from "./verify";
import axios from "axios";
import { login, register } from "../../firebase/bd";
import { useNavigate } from 'react-router-dom';
export default function LoginREG({ isCreate }) {
  const navigate = useNavigate();

  const [seePAS, setPAS] = useState(false);
  const [form, setform] = useState({
    name: "",
    gmail: "",
    password: "",
    rol:"user"
  });
  const [error, setError] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const seePasword = () => {
    setPAS(!seePAS);
  };
  const onChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const newData = { ...form, [property]: value };

    setform(newData);
    setError(verify(newData, property, error));
    verify();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica si hay errores antes de enviar la solicitud
    if (!Object.values(error).some((errorMsg) => errorMsg)) {
      try {
        if(isCreate){
          await register(form)
          alert("done");
          navigate('/rentas');

        } else {
          // Si es un inicio de sesión, realiza el inicio de sesión y luego la solicitud Axios
          await login(form);
         alert("done")
         navigate('/');
          
          
        }
    
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        // Aquí puedes manejar de manera específica cualquier error que pueda ocurrir durante la solicitud
      }
    } else {
      alert("Corrige los errores en el formulario antes de enviar.");
    }
  };
  return (
    <div className={styles.box_container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>{isCreate ? "Crea tu usuario" : "Iniciar sesión"}</h2>
        {isCreate && (
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.inputField}
              placeholder=" "
              required
              onChange={onChange}
              autoComplete="current-name"
            />
            <label htmlFor="name" className={styles.label}>
              Username
            </label>
            <span>{error.name}</span>
          </div>
        )}

        <div className={styles.inputGroup}>
          <input
            type="text"
            name="gmail"
            id="gmail"
            className={styles.inputField}
            placeholder=" "
            required
            onChange={onChange}
            autoComplete="current-gmail"
          />
          <label htmlFor="gmail" className={styles.label}>
            Email address
          </label>
          <span>{error.gmail}</span>
        </div>

        <div className={styles.inputGroup}>
          <input
            type={seePAS ? "text" : "password"}
            name="password"
            id="password"
            className={styles.inputField}
            placeholder=" "
            required
            onChange={onChange}
            autoComplete="current-password"
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <span>{error.password}</span>
          <div className={styles.button_see}>
            <input type="checkbox" onClick={seePasword} />
            <p>Mostrar contraseña</p>
          </div>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
