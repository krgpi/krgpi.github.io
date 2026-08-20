// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/activities`
  | `/downloads/cloudstickies`
  | `/downloads/deskstick`
  | `/gallery`
  | `/privacy`
  | `/works`
  | `/works/cloudstickies`
  | `/works/cloudstickies/en`
  | `/works/cloudstickies/privacy`
  | `/works/deskstick`
  | `/works/deskstick/en`
  | `/works/deskstick/privacy`
  | `/works/fennec`
  | `/works/fennec/en`
  | `/works/polarisetter`
  | `/works/polarisetter/en`
  | `/works/polarisetter/privacy`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
