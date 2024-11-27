using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;
using Estrutura_Projeto;

namespace Desktop_TCC
{
    internal class feedback : conexao
    {
        private int cod_feedback;
        private string experiencia_feedback;
        private string comentario_feedback;
        private int cod_usuario;

        public void setCod_feedback(int cod_feedback)
        {
            this.cod_feedback = cod_feedback;
        }
        public int getCod_feedback()
        {
            return this.cod_feedback;
        }

        ///
        public void setExperiencia_feedback(string experiencia_feedback)
        {
            this.experiencia_feedback = experiencia_feedback;
        }
        public string getExperiencia_feedback()
        {
            return this.experiencia_feedback;
        }

        ///
        public void setComentario_feedback(string comentario_feedback)
        {
            this.comentario_feedback = comentario_feedback;
        }
        public string getComentario_feedback()
        {
            return this.comentario_feedback;
        }

        ///
        public void setCod_usuario(int cod_usuario)
        {
            this.cod_usuario = cod_usuario;
        }
        public int getCod_usuario()
        {
            return this.cod_usuario;
        }

        public DataTable consultar()
        {
            this.abrirconexao();
            string MSQL = "SELECT cod_feedback,experiencia_feedback, comentario_feedback ,usuario.nome_usuario,usuario.cod_usuario, usuario.foto_usuario FROM feedback INNER JOIN usuario ON feedback.cod_usuario = usuario.cod_usuario;";

            MySqlCommand cmd = new MySqlCommand(MSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            this.fecharconexao();
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
    }
}
