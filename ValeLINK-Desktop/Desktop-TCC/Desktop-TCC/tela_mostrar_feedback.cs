using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Desktop_TCC
{
    public partial class tela_feedback : Form
    {
        public tela_feedback()
        {
            InitializeComponent();
        }

        feedback em = new feedback();

        private void btn_mostrar_feedbacks_Click(object sender, EventArgs e)
        {
            data_grid_feedbacks.DataSource = em.consultar();
        }


        private void data_grid_feedbacks_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
        public void exibiregistro(int i)
        {
            txt_cod_usuario.Text = "" + data_grid_feedbacks[4, i].Value;
            txt_comentario_feedback.Text = "" + data_grid_feedbacks[2, i].Value;
            txt_experiencia_feedback.Text = "" + data_grid_feedbacks[1, i].Value;
            txt_nome_usuario.Text = "" + data_grid_feedbacks[3, i].Value;

        }
        private void data_grid_feedbacks_Click(object sender, EventArgs e)
        {
            exibiregistro(data_grid_feedbacks.CurrentRow.Index);
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void data_grid_feedbacks_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0) // Garante que uma linha foi clicada
            {
                DataGridViewRow row = data_grid_feedbacks.Rows[e.RowIndex];

                // Recupera o nome da imagem na coluna 5 (foto_usuario)
                string nomeImagem = row.Cells[5].Value.ToString();

                // Caminho base onde as imagens estão armazenadas
                string caminhoBase = @"C:\xampp\htdocs\apiVALELINK\usuarios\imgs\";

                // Concatena o caminho base com o nome da imagem
                string caminhoImagem = caminhoBase + nomeImagem;

                // Verifique se o arquivo existe antes de tentar carregá-lo
                if (!string.IsNullOrEmpty(nomeImagem) && System.IO.File.Exists(caminhoImagem))
                {
                    // Carrega a imagem na PictureBox
                    pictureBox1.Image = Image.FromFile(caminhoImagem);
                }
                else
                {
                    // Exibe uma mensagem caso a imagem não seja encontrada
                    MessageBox.Show("Imagem não encontrada ou caminho inválido.");
                }

                // Exibe os dados da linha clicada (cod_usuario, comentario_feedback, etc.)
                exibiregistro(e.RowIndex);
            }
        }

        private void tela_feedback_Load(object sender, EventArgs e)
        {

        }
    }
}
