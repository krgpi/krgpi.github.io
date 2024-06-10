// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/activities`
  | `/career`
  | `/career/career`
  | `/gallery`
  | `/works`
  | `/works/cloudstickies`
  | `/works/cloudstickies/en`
  | `/works/cloudstickies/en/english`
  | `/works/cloudstickies/japanese`
  | `/works/works`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
