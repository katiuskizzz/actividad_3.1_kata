import React, { useState } from 'react';
import axios from 'axios';

 function RegistrarUsuario() {
  const [pk_cedula_user, set_Pk_cedula_user] = useState('');
  const [nombre_user, set_nombre_user] = useState('');
  const [email_user, set_email_user] = useState('');
  const [password_user, set_password_user] = useState('');
  const [descripcion_user, set_descripcion_user] = useState('');
  const [telefono_user, set_telefono_user] = useState('');
  const [fecha_nacimiento_user, set_fecha_nacimiento_user] = useState('');
  const [rol_user, set_rol_user] = useState('');


  const registrar = async () => {
    try {
        const response = await axios.post('http://localhost:4000/usuario/registrar', {
        pk_cedula_user,
        nombre_user,
        email_user,
        password_user,
        descripcion_user,
        telefono_user,
        fecha_nacimiento_user,
        rol_user,
      });//que me repaonda que salio bien o que sali mal
      console.log(response.data);
      alert('Usuario registrado exitosamente');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario' + error);
    }
  };

  return (


    <div>
      <h1>Registro de usuario</h1>
      <form onSubmit={(e) => { e.preventDefault(); registrar(); }}>
        <label>Cédula:</label>
        <input type="text" value={pk_cedula_user} onChange={(e) => set_Pk_cedula_user(e.target.value)} />

        <label>Nombre:</label>
        <input type="text" value={nombre_user} onChange={(e) => set_nombre_user(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email_user} onChange={(e) => set_email_user(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password_user} onChange={(e) => set_password_user(e.target.value)} />

        <label>Descripción:</label>
        <textarea value={descripcion_user} onChange={(e) => set_descripcion_user(e.target.value)} />

        <label>Telefono:</label>
        <input type="text" value={telefono_user} onChange={(e) => set_telefono_user(e.target.value)} />

        <label>Fecha de Nacimiento:</label>
        <input type="date" value={fecha_nacimiento_user} onChange={(e) => set_fecha_nacimiento_user(e.target.value)} />

        <label>Rol:</label>
        <select value={rol_user} onChange={(e) => set_rol_user(e.target.value)}>
          <option value="vendedor">vendedor</option>
          <option value="comprador">comprador</option>
          <option value="admin">admin</option>
        </select>

        <button type="submit">Registrar Usuario</button>
      </form>
    </div>
  );
}
export default RegistrarUsuario;
