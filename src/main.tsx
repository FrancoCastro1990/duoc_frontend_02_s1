import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource-variable/montserrat'
import './index.css'
import { Layout, ScrollToTop } from './features/shared'
import { VehicleCatalog } from './features/vehicles'
import { AboutUs } from './features/about'
import { Contact } from './features/contact'
import { AddVehicle } from './features/add-vehicle'
import { VehicleInventory } from './features/vehicle-inventory'
import { VehicleProvider } from './features/vehicles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VehicleProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<VehicleCatalog />} />
            <Route path="quienes-somos" element={<AboutUs />} />
            <Route path="contactanos" element={<Contact />} />
            <Route path="agregar-vehiculo" element={<AddVehicle />} />
            <Route path="inventario" element={<VehicleInventory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VehicleProvider>
  </StrictMode>,
)
