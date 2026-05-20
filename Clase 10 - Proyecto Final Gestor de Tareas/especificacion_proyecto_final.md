# Proyecto Final: Gestor de Tareas (Task Manager) Aplicación Web con React

## 📑 Índice

- [Descripción General](#descripción-general)
- [Requisitos Funcionales](#requisitos-funcionales)
  - [1. Gestión de Tareas (CRUD)](#1-gestión-de-tareas-crud)
  - [2. Filtrado y Ordenación](#2-filtrado-y-ordenación)
  - [3. Persistencia de Datos](#3-persistencia-de-datos)
- [Requisitos de Diseño](#requisitos-de-diseño)
- [Requisitos Técnicos](#-requisitos-técnicos)
- [Flujo de Trabajo Sugerido](#flujo-de-trabajo-sugerido)
- [Entregables](#entregables)
- [Checklist Pre-Entrega](#checklist-pre-entrega)
- [Recursos Útiles](#recursos-útiles)
- [Soporte](#-soporte)

## Descripción General

Desarrollarás una aplicación web completa de **Gestión de Tareas** utilizando React. La aplicación permitirá a los usuarios crear, leer, actualizar y eliminar tareas (CRUD), así como filtrarlas y ordenarlas según diferentes criterios.

Este proyecto te permitirá demostrar todos los conocimientos adquiridos durante el curso: HTML, CSS, JavaScript y React.

## Requisitos Funcionales

### 1. Gestión de Tareas (CRUD)

#### Crear Tarea

- Formulario con los siguientes campos:
  - **Título** (texto, obligatorio, máx. 100 caracteres)
  - **Descripción** (textarea, opcional, máx. 500 caracteres)
  - **Prioridad** (selector: Alta, Media, Baja)
  - **Estado** (selector: Pendiente, En Progreso, Completada)
  - **Fecha Límite** (date picker, opcional)
- Validación de campos obligatorios
- Botón "Crear Tarea" o "Guardar"
- Mensaje de confirmación al crear

#### Visualizar Tareas

- Lista o grid de todas las tareas
- Cada tarea muestra:
  - Título
  - Descripción (truncada si es muy larga)
  - Prioridad (con indicador visual - color)
  - Estado
  - Fecha límite
  - Botones de acción (Editar, Eliminar, Completar)
- Contador de tareas totales

#### Editar Tarea

- Al hacer clic en "Editar", se abre el formulario
- Formulario pre-rellenado con los datos actuales
- Permite modificar cualquier campo
- Botón "Guardar Cambios"
- Opción para cancelar sin guardar

#### Eliminar Tarea

- Botón o icono de eliminar en cada tarea
- Confirmación antes de eliminar (modal o confirm)
- Mensaje de confirmación tras eliminar
- La tarea se elimina permanentemente

#### Marcar como Completada

- Botón para marcar tarea como completada
- Cambio visual (tachado, color diferente)
- Actualiza el estado automáticamente

### 2. Filtrado y Ordenación

#### Filtros Disponibles

- **Por Estado:**
  - Todas las tareas
  - Solo pendientes
  - Solo en progreso
  - Solo completadas
  
- **Por Prioridad:**
  - Todas
  - Alta prioridad
  - Media prioridad
  - Baja prioridad

#### Ordenación

- Por fecha de creación (más recientes primero/último)
- Por fecha límite (próximas a vencer primero)
- Por prioridad (alta a baja o viceversa)
- Por título (alfabéticamente A-Z o Z-A)

### 3. Persistencia de Datos

#### LocalStorage

- Guardar todas las tareas en localStorage
- Recuperar tareas al cargar la aplicación
- Actualizar localStorage en cada operación CRUD

## Requisitos de Diseño

### Responsive Design

- Funcionar correctamente multiples dispotivos con distintas resoluciones
- Usar Flexbox o CSS Grid para layouts

### Estilos Visuales

- Efectos hover en botones e interactivos
- Diseño limpio y profesional

---

## Requisitos Técnicos

### Componentes Mínimos Requeridos (5)

1. **Header** - Título y navegación (si aplica)
2. **TaskForm** - Formulario para crear/editar
3. **TaskList** - Contenedor de todas las tareas
4. **TaskCard** - Tarjeta individual de tarea
5. **FilterBar** - Controles de filtrado y ordenación

### Tecnologías Obligatorias

- **Vite** - Build tool
- **React 18+** - Framework
- **CSS** - Estilos (CSS puro, modules o styled)
- **useState** - Manejo de estado
- **useEffect** - Efectos secundarios (persistencia)

### Tecnologías Opcionales

- React Router (para multipágina)
- Context API (para estado global)
- React Icons (iconos)
- Date-fns o Day.js (manejo de fechas)
- UUID (generar IDs únicos)

## Flujo de Trabajo Sugerido

### Fase 1: Setup y Estructura

1. Crear proyecto con Vite
2. Crear estructura de carpetas
3. Crear componentes vacíos
4. Establecer estado inicial

### Fase 2: CRUD Básico

1. Implementar creación de tareas
2. Implementar visualización de tareas
3. Implementar edición de tareas
4. Implementar eliminación de tareas

### Fase 3: Filtros y Ordenación

1. Implementar filtros de estado
2. Implementar filtros de prioridad
3. Implementar ordenación
4. Combinar múltiples filtros

### Fase 4: Persistencia

1. Guardar en localStorage
2. Cargar desde localStorage
3. Manejar casos especiales (primera carga, errores)

### Fase 5: Estilos y UX

1. Diseño responsive
2. Colores y tipografía
3. Transiciones y animaciones
4. Pulir detalles visuales

### Fase 6: Testing

1. Probar todas las funcionalidades
2. Corregir bugs
3. Mejorar UX
4. Documentar en README

## Entregables

### 1. Código Fuente

- Proyecto completo
- Estructura de archivos organizada

### 2. README.md

Debe incluir un fichero README.md donde se detalle un poco el objetivo del proyecto con algunos datos tecnologicos.

En caso de ser necesario consideraciones para poder poner en marcha el proyecto.

### 3. Formato de Entrega

Se debera subir al repositorio, facilitar dicho repositorio a vuestro tutor y el abrira una tarea en Educamos para poder realizar la entrega desde el aula de educamos

## Checklist Pre-Entrega

Antes de entregar, verifica:

### Funcionalidad

- [ ] Puedo crear tareas nuevas
- [ ] Las tareas se muestran correctamente
- [ ] Puedo editar tareas existentes
- [ ] Puedo eliminar tareas (con confirmación)
- [ ] Los filtros de estado funcionan
- [ ] Los filtros de prioridad funcionan
- [ ] La ordenación funciona
- [ ] Los datos persisten al recargar la página

### Código

- [ ] El código está bien organizado en componentes
- [ ] Los componentes tienen nombres descriptivos
- [ ] Las variables y funciones tienen nombres claros
- [ ] El código sigue convenciones de React (hooks, etc.)
- [ ] No hay console.log innecesarios
- [ ] No hay código comentado sin usar

### Diseño

- [ ] La aplicación se ve bien en desktop
- [ ] La aplicación se ve bien en tablet
- [ ] La aplicación se ve bien en móvil
- [ ] Los colores de prioridad son visibles
- [ ] Los botones tienen efectos hover
- [ ] Las transiciones son suaves

### Documentación

- [ ] Existe un README.md completo
- [ ] Las instrucciones de instalación son claras
- [ ] El código complejo tiene comentarios explicativos

### Testing

- [ ] He probado todas las funcionalidades
- [ ] He probado en diferentes navegadores
- [ ] He probado el responsive en varios tamaños
- [ ] No hay errores en la consola
- [ ] La aplicación no se "rompe" con ninguna acción

## Recursos Útiles

### Documentación

- [React Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [MDN - LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

### Herramientas

- [React Icons](https://react-icons.github.io/react-icons/) - Iconos
- [UUID Generator](https://www.uuidgenerator.net/) - IDs únicos
- [Coolors](https://coolors.co/) - Paletas de colores

### Debugging

- React Developer Tools (extensión navegador)
- Console del navegador (F12)
- [Stack Overflow](https://stackoverflow.com/)

## Soporte

Si tienes dudas durante el desarrollo:

- Envía email al instructor: victor.moreno@cojali.com
- Horario de consultas: 8:00 - 18:00