# Recomendaciones Visuales para el Portfolio

Documento con sugerencias para mejorar la experiencia visual y de usuario del portfolio.

---

## Cambios implementados (completos)

### 1. Reducción de espaciado
- **Hero:** `min-h-screen` → `min-h-[85vh]`, márgenes reducidos (`lg:mb-20` → `lg:mb-8`)
- **Títulos de sección:** `my-16` → `my-10`
- **Technologies:** `pb-24` → `pb-12`, `space-y-16` → `space-y-10`
- **Proyectos:** `mb-16` → `mb-10`, subtítulos `my-10` → `my-6`, grupos `mb-12` → `mb-8`
- **Contact:** `pb-20` → `pb-12`

### 2. Botón hamburger rediseñado
- Eliminado el glow cyan intenso y el fondo blanco/negro contrastante
- Nuevo estilo: fondo semi-transparente, borde sutil, hover suave
- Integrado con la paleta oscura del portfolio

### 3. Tipografía
- Fuente principal: **DM Sans**
- Fuente display para nombre: **Space Grotesk**
- Bio con `leading-snug` para mejor densidad

### 4. Hero
- **CTA:** Botones "Ver proyectos" y "Descargar CV"
- Imagen de perfil con `rounded-2xl`
- Gradiente de fondo más visible (blob adicional)
- CV_URL configurable en constants

### 5. Navbar
- Badge "Abierto a oportunidades" con indicador animado
- Iconos sociales más grandes en desktop (`lg:text-2xl`)

### 6. Sidebar
- Indicador de sección activa (borde cyan, fondo destacado)

### 7. Scroll progress bar
- Barra fina en la parte superior que indica progreso de scroll

### 8. Footer
- Copyright, "Hecho con React y Tailwind CSS"
- Enlaces rápidos: GitHub, LinkedIn, Email

### 9. Cards de proyectos
- Hover más marcado: `translateY(-6px)`, sombra elevada, borde cyan
- `loading="lazy"` en imágenes de proyectos

### 10. Language toggle
- Muestra "ES | EN" o "EN | ES" según idioma actual

### 11. Performance
- Imágenes con `loading="lazy"` (excepto Hero)
- `object-cover` en imágenes de proyectos

---

## Recomendaciones futuras (opcionales)

### Tipografía
- **Considerar una fuente más distintiva:** Inter es correcta pero muy usada. Alternativas: *DM Sans*, *Outfit*, *Space Grotesk* o *Syne* para un look más personal.
- **Jerarquía:** El nombre podría usar una fuente display para mayor impacto.
- **Bio:** Reducir ligeramente el `leading-relaxed` si el texto se siente muy espaciado.

### Hero
- **CTA (Call to Action):** Añadir un botón tipo "Ver proyectos" o "Descargar CV" debajo de la bio para guiar al usuario.
- **Imagen de perfil:** Probar `rounded-full` o `rounded-2xl` para variar el estilo.
- **Gradiente de fondo:** El blob cyan es sutil; se podría hacer más visible en scroll o añadir un patrón geométrico ligero.

### Navegación
- **Navbar:** Los iconos sociales podrían ser un poco más grandes en desktop.
- **Sidebar:** El menú lateral está bien; considerar un indicador de sección activa más visible al hacer scroll.

### Secciones de contenido
- **Cards de proyectos:** Un hover más marcado (ligera elevación o cambio de borde) mejora la interactividad.
- **Technologies:** Las tarjetas con flip están bien; asegurar que el contraste de texto sea suficiente en modo claro.
- **Certificaciones:** Si hay muchas, un diseño tipo "acordeón" o tabs por institución puede ahorrar espacio.

### Extras sugeridos
1. **Sección "Status" o "Disponibilidad":** Indicador tipo "Abierto a oportunidades" con un badge o pill.
2. **Scroll progress bar:** Barra fina en la parte superior que indica el progreso de scroll.
3. **Modo "focus":** Botón para ocultar sidebar y navbar y ver solo el contenido.
4. **Micro-interacciones:** Pequeñas animaciones al hacer hover en links y botones.
5. **Footer:** Enlaces rápidos (GitHub, LinkedIn, email) y año actual.

### Accesibilidad
- Revisar contraste de texto en modo claro (especialmente grises sobre blanco).
- Asegurar que todos los botones tengan `aria-label` adecuados.
- El toggle de idioma podría mostrar "ES | EN" en lugar de solo "ES" para mayor claridad.

### Performance
- Las imágenes de proyectos podrían usar `loading="lazy"` si no lo tienen.
- Considerar `object-fit: cover` con dimensiones fijas para evitar layout shift.

---

## Orden de prioridad sugerido

1. CTA en Hero (alta prioridad)
2. Fuente alternativa (media)
3. Indicador de sección activa en sidebar (media)
4. Footer con enlaces (baja)
5. Scroll progress bar (opcional)

---

*Documento generado el 18 de marzo de 2025*
