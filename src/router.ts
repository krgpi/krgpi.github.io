// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/activities`
  | `/career`
  | `/career/career`
  | `/gallery`
  | `/privacy`
  | `/releases/cloudstickies`
  | `/releases/deskstick`
  | `/works`
  | `/works/cloudstickies`
  | `/works/cloudstickies/en`
  | `/works/cloudstickies/privacy`
  | `/works/deskstick`
  | `/works/deskstick/en`
  | `/works/deskstick/en/english`
  | `/works/deskstick/japanese`
  | `/works/deskstick/privacy`
  | `/works/polarisetter`
  | `/works/polarisetter/en`
  | `/works/polarisetter/en/english`
  | `/works/polarisetter/japanese`
  | `/works/polarisetter/privacy`
  | `/works/works`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
